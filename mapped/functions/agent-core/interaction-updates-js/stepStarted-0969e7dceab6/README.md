# `stepStarted`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-updates.js` · [README do módulo](../../../../modules/agent-core/interaction-updates-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476005-476012](../../../../../reference/runtime/host-main.cjs#L476005-L476012) | `FunctionExpression` | não | `stepId` |
| [evaluation:255315-255322](../../../../../reference/runtime/sand-eval-runner.cjs#L255315-L255322) | `FunctionExpression` | não | `stepId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476005-476012](../../../../../reference/runtime/host-main.cjs#L476005-L476012) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255315-255322](../../../../../reference/runtime/sand-eval-runner.cjs#L255315-L255322) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476005

Chamadas escritas diretamente neste corpo: `BigInt`, `new InteractionUpdate`, `new StepStartedUpdate`.

SHA-256 do trecho: `c3f06aed6a17b4e44802ee899eb6b66421e1f335c2859b9f607d2b0010a21f95`.

### evaluation:255315

Chamadas escritas diretamente neste corpo: `BigInt`, `new InteractionUpdate`, `new StepStartedUpdate`.

SHA-256 do trecho: `c3f06aed6a17b4e44802ee899eb6b66421e1f335c2859b9f607d2b0010a21f95`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
