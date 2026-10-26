# `createRemoteBoxResourceAccessor/ownsMonitorForShellNavigationAudit`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/remote-box-resources.ts` · [README do módulo](../../../../../modules/core/runner/remote-box-resources-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:534533-534542](../../../../../../reference/runtime/sand-eval-runner.cjs#L534533-L534542) | `ArrowFunctionExpression` | não | `connection` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534533-534542](../../../../../../reference/runtime/sand-eval-runner.cjs#L534533-L534542) | 1 | 0 | 0 | 3 | 0 | 1 |

### evaluation:534533

Chamadas escritas diretamente neste corpo: `connection.remoteAccessor.get`, `isNoMonitorComputerUseExecutor`.

SHA-256 do trecho: `a6da49038e69f640e3ecb821039efe68c25a15a2f0b7e1a2f5e613a5b974a6f9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
