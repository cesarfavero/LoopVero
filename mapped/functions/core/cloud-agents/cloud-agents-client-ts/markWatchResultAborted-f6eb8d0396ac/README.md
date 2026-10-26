# `markWatchResultAborted`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agents-client.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:512677-512687](../../../../../../reference/runtime/host-main.cjs#L512677-L512687) | `FunctionDeclaration` | não | `bcId, result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512677-512687](../../../../../../reference/runtime/host-main.cjs#L512677-L512687) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:512677

Chamadas escritas diretamente neste corpo: `.join`, `result.text.split`.

SHA-256 do trecho: `9274282112f19dfb3c6f41d1be9d5d88c6a25719249c8484407fb272606a520c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
