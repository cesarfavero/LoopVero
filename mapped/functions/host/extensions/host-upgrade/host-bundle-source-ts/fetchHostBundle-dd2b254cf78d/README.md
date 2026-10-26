# `fetchHostBundle`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/host-upgrade/host-bundle-source.ts` · [README do módulo](../../../../../../modules/host/extensions/host-upgrade/host-bundle-source-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:681204-681223](../../../../../../../reference/runtime/host-main.cjs#L681204-L681223) | `FunctionDeclaration` | sim | `fetchFn, version4, base` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681204-681223](../../../../../../../reference/runtime/host-main.cjs#L681204-L681223) | 3 | 0 | 3 | 1 | 3 | 0 |

### host:681204

Chamadas escritas diretamente neste corpo: `SHORT_GIT_SHA_REGEX.test`, `fetchFn`, `fetchHostBundleDigest`, `hostBundleTarballUrl`, `new SandHostBundleSourceError`, `new Uint8Array`, `resp.arrayBuffer`.

Alvos de lançamento explícito: `SandHostBundleSourceError`.

SHA-256 do trecho: `0ced48d81061d2b3164e307946aad39032fd1111a800055b996c102d707d9302`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
