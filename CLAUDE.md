# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project State

This is a greenfield web project. No framework, build tooling, or source code exists yet — only design rules in `AGENTS.md`. All architectural and tooling decisions are still open.

## Design Rules (from AGENTS.md)

These are hard constraints for all UI work. Read `AGENTS.md` in full before touching any frontend code.

### Prohibited
- **Colors:** Purple / indigo / blue-purple gradients (`#6366F1`, `#8B5CF6`). Tailwind's default palette as-is.
- **Backgrounds:** Flat solid colors — must include noise texture or gradient.
- **Layout:** Hero + three-card layouts. Perfectly centered alignment. Equal-width multi-column grids (must be asymmetric).
- **Copy:** Jargon, filler words, Lorem Ipsum, passive voice, sentences over 15 characters.
- **Components:** Unstyled Shadcn / Material UI defaults (deep customization required). Emoji as functional icons. Linear animations (`ease-in-out`).

### Required
- **Copy tone:** Conversational, concrete (use numbers and scenarios), allowed to be humorous or provocative. Max ~15 characters per sentence.
- **Icons:** Iconify library (`https://iconify.design`)
- **Placeholder images:** Picsum Photos (`https://picsum.photos`)
- **Real photos:** Source from Pexels (`https://www.pexels.com`)
- **Illustrations:** unDraw (`https://undraw.co`)
