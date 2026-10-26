# `resolveCopyInStoreId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-copy-in.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:483604-483610](../../../../../../../reference/runtime/host-main.cjs#L483604-L483610) | `FunctionDeclaration` | sim | `env, sourceMap` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:483604-483610](../../../../../../../reference/runtime/host-main.cjs#L483604-L483610) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:483604

Chamadas escritas diretamente neste corpo: `env.SAND_BOX_STORE_ID.trim`, `isAgentStoreSourceId`, `sourceMap.getBoxStore`.

SHA-256 do trecho: `bdc05de3425ee993982e89b8f3792477e11a9f83d05cf2d032e8171f71b41941`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
