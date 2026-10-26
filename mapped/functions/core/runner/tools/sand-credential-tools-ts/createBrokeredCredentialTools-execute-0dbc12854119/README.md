# `createBrokeredCredentialTools/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-credential-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-credential-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:751956-751977](../../../../../../../reference/runtime/host-main.cjs#L751956-L751977) | `ArrowFunctionExpression` | sim | `ctx, args, deps` |
| [evaluation:525022-525043](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525022-L525043) | `ArrowFunctionExpression` | sim | `ctx, args, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751956-751977](../../../../../../../reference/runtime/host-main.cjs#L751956-L751977) | 8 | 0 | 2 | 5 | 0 | 0 |
| [evaluation:525022-525043](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525022-L525043) | 8 | 0 | 2 | 5 | 0 | 0 |

### host:751956

Chamadas escritas diretamente neste corpo: `broker.fill`, `broker.getStatus`, `noteToolTargetHost`.

SHA-256 do trecho: `811355e127ba0418c1a1b47941a1cbe8ca55b19830f8b791be9a57afb03666e1`.

### evaluation:525022

Chamadas escritas diretamente neste corpo: `broker.fill`, `broker.getStatus`, `noteToolTargetHost`.

SHA-256 do trecho: `811355e127ba0418c1a1b47941a1cbe8ca55b19830f8b791be9a57afb03666e1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
