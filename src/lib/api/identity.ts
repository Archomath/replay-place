import {
  CompositeHandleResolver,
  DohJsonHandleResolver,
  WellKnownHandleResolver,
  type ResolvedActor,
  CompositeDidDocumentResolver,
  PlcDidDocumentResolver,
  WebDidDocumentResolver,
  LocalActorResolver,
} from "@atcute/identity-resolver";

const handleResolver = new CompositeHandleResolver({
  strategy: "race",
  methods: {
    dns: new DohJsonHandleResolver({ dohUrl: "https://mozilla.cloudflare-dns.com/dns-query" }),
    http: new WellKnownHandleResolver(),
  },
});

const didResolver = new CompositeDidDocumentResolver({
  methods: {
    plc: new PlcDidDocumentResolver(),
    web: new WebDidDocumentResolver(),
  },
});

const actorResolver = new LocalActorResolver({
  handleResolver,
  didDocumentResolver: didResolver,
});

const didCache = new Map<string, ResolvedActor>();

export async function resolveDid(did: string) {
  let actor: ResolvedActor | undefined = didCache.get(did);
  if (actor == null) {
    actor = await actorResolver.resolve(did as any);
    didCache.set(actor.did, actor);
  }
  return actor;
}
