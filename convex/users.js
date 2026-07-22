import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateNewUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    pictureUrl: v.optional(v.string()),
  },

  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();

    if (!user[0]?.email) {
      const userData = {
        name: args.name,
        email: args.email,
        pictureUrl: args.pictureUrl,
        credits: 20,
      };

      const insertedId = await ctx.db.insert("users", userData);
      const newUser = await ctx.db.get(insertedId);
      return newUser;
    }

    return user[0];
  },
});

export const UpdateUserCredit = mutation({
  args: {
    uid: v.id("users"),
    credits: v.number(),
  },

  handler: async (ctx, args) => {
    await ctx.db.patch(args.uid, {
      credits: args.credits,
    });

    return await ctx.db.get(args.uid);
  },
});