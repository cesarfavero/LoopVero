# `getStoreDbManifestAgentIds`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-manifest.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-manifest-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476869-476876](../../../../../../../reference/runtime/host-main.cjs#L476869-L476876) | `FunctionDeclaration` | não | `manifest` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476869-476876](../../../../../../../reference/runtime/host-main.cjs#L476869-L476876) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:476869

Chamadas escritas diretamente neste corpo: `STORE_DB_MANIFEST_KEY_RE.exec`, `agentIds.add`, `isSymlinkManifestValue`, `new Set`, `parseAgentId`.

SHA-256 do trecho: `779bd77403608ffd7729f4b5e162de696840761c8f25f540c3fe3bd60402d8fc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
