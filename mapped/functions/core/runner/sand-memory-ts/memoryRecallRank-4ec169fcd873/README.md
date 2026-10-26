# `memoryRecallRank`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/sand-memory.ts` · [README do módulo](../../../../../modules/core/runner/sand-memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702659-702661](../../../../../../reference/runtime/host-main.cjs#L702659-L702661) | `FunctionDeclaration` | não | `memory` |
| [evaluation:536161-536163](../../../../../../reference/runtime/sand-eval-runner.cjs#L536161-L536163) | `FunctionDeclaration` | não | `memory` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702659-702661](../../../../../../reference/runtime/host-main.cjs#L702659-L702661) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:536161-536163](../../../../../../reference/runtime/sand-eval-runner.cjs#L536161-L536163) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:702659

Chamadas escritas diretamente neste corpo: `Math.log2`, `memoryImportance`.

SHA-256 do trecho: `6c787ecd73794a57b5afa33223b61b8a4416013fab747e57893abbb77535affb`.

### evaluation:536161

Chamadas escritas diretamente neste corpo: `Math.log2`, `memoryImportance`.

SHA-256 do trecho: `e25ecb598f585beee13303c63fb54e2f92f57de74c86b185628329b7e4477189`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
