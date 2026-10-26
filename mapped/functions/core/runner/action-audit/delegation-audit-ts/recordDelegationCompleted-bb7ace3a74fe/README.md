# `recordDelegationCompleted`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/action-audit/delegation-audit.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/delegation-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:770032-770034](../../../../../../../reference/runtime/host-main.cjs#L770032-L770034) | `FunctionDeclaration` | não | `ctx, settled` |
| [evaluation:566716-566718](../../../../../../../reference/runtime/sand-eval-runner.cjs#L566716-L566718) | `FunctionDeclaration` | não | `ctx, settled` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770032-770034](../../../../../../../reference/runtime/host-main.cjs#L770032-L770034) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:566716-566718](../../../../../../../reference/runtime/sand-eval-runner.cjs#L566716-L566718) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:770032

Chamadas escritas diretamente neste corpo: `.completed`, `ctx.get`.

SHA-256 do trecho: `cff8a560cc36d5b68ea5db69017d136c93951a14041e81bde4c9144474e0269e`.

### evaluation:566716

Chamadas escritas diretamente neste corpo: `.completed`, `ctx.get`.

SHA-256 do trecho: `cff8a560cc36d5b68ea5db69017d136c93951a14041e81bde4c9144474e0269e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
