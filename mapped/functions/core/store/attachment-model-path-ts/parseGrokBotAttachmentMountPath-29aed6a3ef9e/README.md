# `parseGrokBotAttachmentMountPath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/store/attachment-model-path.ts` · [README do módulo](../../../../../modules/core/store/attachment-model-path-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:752288-752294](../../../../../../reference/runtime/host-main.cjs#L752288-L752294) | `FunctionDeclaration` | não | `mountPath` |
| [evaluation:530366-530372](../../../../../../reference/runtime/sand-eval-runner.cjs#L530366-L530372) | `FunctionDeclaration` | não | `mountPath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:752288-752294](../../../../../../reference/runtime/host-main.cjs#L752288-L752294) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:530366-530372](../../../../../../reference/runtime/sand-eval-runner.cjs#L530366-L530372) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:752288

Chamadas escritas diretamente neste corpo: `isAgentStoreId`, `mountPath.slice`, `mountPath.startsWith`, `storeId.toLowerCase`.

SHA-256 do trecho: `0e341e4e3f11358b085ea31da29b756a4c099341c9e199babeb3677c1dd91832`.

### evaluation:530366

Chamadas escritas diretamente neste corpo: `isAgentStoreId`, `mountPath.slice`, `mountPath.startsWith`, `storeId.toLowerCase`.

SHA-256 do trecho: `0e341e4e3f11358b085ea31da29b756a4c099341c9e199babeb3677c1dd91832`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
