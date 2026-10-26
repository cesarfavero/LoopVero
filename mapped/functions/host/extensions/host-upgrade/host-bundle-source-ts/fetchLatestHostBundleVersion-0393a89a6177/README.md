# `fetchLatestHostBundleVersion`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/host-upgrade/host-bundle-source.ts` · [README do módulo](../../../../../../modules/host/extensions/host-upgrade/host-bundle-source-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:681171-681187](../../../../../../../reference/runtime/host-main.cjs#L681171-L681187) | `FunctionDeclaration` | sim | `fetchFn = fetch, channel = resolveHostBundleChannel(), base = SAND_HOST_BUNDLE_PUBLIC_BASE_URL` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681171-681187](../../../../../../../reference/runtime/host-main.cjs#L681171-L681187) | 3 | 0 | 2 | 5 | 0 | 1 |

### host:681171

Chamadas escritas diretamente neste corpo: `.trim`, `Date.now`, `SHORT_GIT_SHA_REGEX.test`, `cachedVersions.get`, `cachedVersions.set`, `fetchFn`, `hostBundleVersionUrl`, `reportFallback`, `resp.text`.

SHA-256 do trecho: `7ca0f1f261ca8c5f876274a139c80046e152d119cc31d834813cbcb097c877ca`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
