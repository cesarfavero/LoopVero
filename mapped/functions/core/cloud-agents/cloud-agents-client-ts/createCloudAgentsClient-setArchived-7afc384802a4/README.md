# `createCloudAgentsClient/setArchived`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agents-client.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:513227-513236](../../../../../../reference/runtime/host-main.cjs#L513227-L513236) | `FunctionDeclaration` | sim | `bcId, archived` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513227-513236](../../../../../../reference/runtime/host-main.cjs#L513227-L513236) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:513227

Chamadas escritas diretamente neste corpo: `.archiveBackgroundComposer`, `client`, `new ArchiveBackgroundComposerRequest`.

SHA-256 do trecho: `27881b7568a450b7686f2741f24e941a396e307bc72a46701f0b10d1c6d86d98`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
