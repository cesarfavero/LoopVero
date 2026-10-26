# `exchangeLines`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/sand-memory.ts` · [README do módulo](../../../../../modules/core/runner/sand-memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:536192-536197](../../../../../../reference/runtime/sand-eval-runner.cjs#L536192-L536197) | `FunctionDeclaration` | não | `userMessage, agentMessage` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536192-536197](../../../../../../reference/runtime/sand-eval-runner.cjs#L536192-L536197) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:536192

Chamadas escritas diretamente neste corpo: `agentMessage.trim`, `userMessage.trim`.

SHA-256 do trecho: `aa7e4b873316c0b2148631e015c8fdedd945f8152ad449b11d30437db7785a5e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
