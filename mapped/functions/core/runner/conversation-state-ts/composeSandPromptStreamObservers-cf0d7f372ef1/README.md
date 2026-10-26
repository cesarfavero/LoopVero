# `composeSandPromptStreamObservers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/conversation-state.ts` · [README do módulo](../../../../../modules/core/runner/conversation-state-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:529401-529446](../../../../../../reference/runtime/sand-eval-runner.cjs#L529401-L529446) | `FunctionDeclaration` | não | `...observers` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529401-529446](../../../../../../reference/runtime/sand-eval-runner.cjs#L529401-L529446) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:529401

Chamadas escritas diretamente neste corpo: `observers.filter`.

SHA-256 do trecho: `b2e1b9ca7ff58894a67974a98f01d526106ed219d3e6727fe44e578ace8c5468`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
