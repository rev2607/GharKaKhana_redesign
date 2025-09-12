import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed users
  const admin = await prisma.user.upsert({
    where: { phone: '+910000000001' },
    update: {},
    create: {
      phone: '+910000000001',
      email: 'admin@example.com',
      name: 'Admin',
      address_line1: 'Admin Street 1',
      city: 'Hyderabad',
      pincode: '500001',
      state: 'Telangana',
      role: Role.ADMIN,
      supabase_user_id: 'seed-admin-user-id'
    }
  });

  const customer = await prisma.user.upsert({
    where: { phone: '+910000000002' },
    update: {},
    create: {
      phone: '+910000000002',
      email: 'customer@example.com',
      name: 'Customer',
      address_line1: 'Customer Street 5',
      city: 'Hyderabad',
      pincode: '500002',
      state: 'Telangana',
      role: Role.CUSTOMER,
      supabase_user_id: 'seed-customer-user-id'
    }
  });

  // Seed Meal Plans (examples include weekly 6 days and monthly 25 days variants)
  const plans = [
    { name: 'Veg Normal - Weekly', slug: 'veg-normal-weekly', price: 79 * 6, perMeal: 79, duration: 6 },
    { name: 'Veg Normal - Monthly', slug: 'veg-normal-monthly', price: 79 * 25, perMeal: 79, duration: 25 },
    { name: 'Veg Special - Weekly', slug: 'veg-special-weekly', price: 89 * 6, perMeal: 89, duration: 6 },
    { name: 'Veg Special - Monthly', slug: 'veg-special-monthly', price: 89 * 25, perMeal: 89, duration: 25 },
    { name: 'Combo Normal - Weekly', slug: 'combo-normal-weekly', price: 99 * 6, perMeal: 99, duration: 6 },
    { name: 'Combo Special - Weekly', slug: 'combo-special-weekly', price: 109 * 6, perMeal: 109, duration: 6 },
    { name: 'Non-Veg Normal - Weekly', slug: 'nonveg-normal-weekly', price: 110 * 6, perMeal: 110, duration: 6 },
    { name: 'Non-Veg Special - Weekly', slug: 'nonveg-special-weekly', price: 120 * 6, perMeal: 120, duration: 6 }
  ];

  for (const p of plans) {
    await prisma.mealPlan.upsert({
      where: { slug: p.slug },
      update: {
        name: p.name,
        price_in_inr: p.price,
        duration_days: p.duration,
        meals_per_day: 2,
        description: `${p.name} at ₹${p.perMeal} per meal` 
      },
      create: {
        name: p.name,
        slug: p.slug,
        price_in_inr: p.price,
        duration_days: p.duration,
        meals_per_day: 2,
        description: `${p.name} at ₹${p.perMeal} per meal`
      }
    });
  }

  // eslint-disable-next-line no-console
  console.log('Seeded users:', { admin: admin.phone, customer: customer.phone });
}

main()
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


