# `computerUseSpanOutcomeOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/computer-use-tracing/computer-use-spans.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/computer-use-tracing/computer-use-spans-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742964-742973](../../../../../../../../reference/runtime/host-main.cjs#L742964-L742973) | `FunctionDeclaration` | não | `error64, signal` |
| [evaluation:515815-515824](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515815-L515824) | `FunctionDeclaration` | não | `error63, signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742964-742973](../../../../../../../../reference/runtime/host-main.cjs#L742964-L742973) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:515815-515824](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515815-L515824) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:742964

Chamadas escritas diretamente neste corpo: `isComputerUseTimeout`.

SHA-256 do trecho: `e5523157d3f774ed110d29e21d7272266657e8138653b0885f3b06a21bfabf4c`.

### evaluation:515815

Chamadas escritas diretamente neste corpo: `isComputerUseTimeout`.

SHA-256 do trecho: `67d83b5179eea9fec84a3f06555fb99b069b48ce5e52c68eef31a04613e20889`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
