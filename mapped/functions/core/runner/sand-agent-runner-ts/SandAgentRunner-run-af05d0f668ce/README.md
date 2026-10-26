# `_SandAgentRunner.run`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-agent-runner.ts` · [README do módulo](../../../../../modules/core/runner/sand-agent-runner-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:594079-594086](../../../../../../reference/runtime/sand-eval-runner.cjs#L594079-L594086) | `method` | não | `...args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:594079-594086](../../../../../../reference/runtime/sand-eval-runner.cjs#L594079-L594086) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:594079

Chamadas escritas diretamente neste corpo: `this.activeSpendRequest.bindRun`, `this.combinedComputerUse.reset`.

SHA-256 do trecho: `c24b470bb548dbe60bed617883fa260b9687c583fb3916a9138f8a3f3be0ab26`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
