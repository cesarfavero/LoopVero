# `_SandAgentRunner.setLatestPromptMessagesGetter`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-agent-runner.ts` · [README do módulo](../../../../../modules/core/runner/sand-agent-runner-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:593929-593937](../../../../../../reference/runtime/sand-eval-runner.cjs#L593929-L593937) | `method` | não | `next` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:593929-593937](../../../../../../reference/runtime/sand-eval-runner.cjs#L593929-L593937) | 2 | 0 | 0 | 0 | 0 | 1 |

### evaluation:593929

Chamadas escritas diretamente neste corpo: `.filter`, `ending`.

Alvos de atribuição ou incremento: `this.lastUserMessages`, `this.latestPromptMessagesGetter`.

SHA-256 do trecho: `0bbd3129a67b3c6e1ae807bd4e84ac9aaa2c01c499036129632aa6c8c983c5c2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
