<p align="center">
  <img src="site/static/logo.png" alt="Detangler" width="128" />
</p>

# Detangler

Find what the editing tangled.

Combs the whole draft or the whole program, not single strands.

Detangler is a structural pass for drafts and programs that have been
worked over. An agent reads the matching skill and writes a report of
what the editing left behind.

| Object | Comb | Apply |
| --- | --- | --- |
| Drafts | `detangler` | `detangler-apply` |
| Programs | `detangler-app` | `detangler-app-apply` |

They share report buckets and use different maps. Keep them as two
skills. Copy the pair you need.

**Docs:** [detangler.dev/docs](https://detangler.dev/docs) · **Site:** [detangler.dev](https://detangler.dev)

## Install

[Download the zip](https://detangler.dev/docs/install) for the pair you
need, or:

```bash
pnpm add -D detangler
```

Copy `node_modules/detangler/skills/<name>/` into a skills directory.

## License

MIT. Copyright Catalyst Forge LLC.
