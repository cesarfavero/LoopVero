# `isSandWaitToolResult`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/loop-detection-policy.ts` · [README do módulo](../../../../../modules/core/runner/loop-detection-policy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:483309-483315](../../../../../../reference/runtime/sand-eval-runner.cjs#L483309-L483315) | `FunctionDeclaration` | não | `call, output2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483309-483315](../../../../../../reference/runtime/sand-eval-runner.cjs#L483309-L483315) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:483309

Chamadas escritas diretamente neste corpo: `invokesFirstPartyTool`, `playwrightRunCodeOutputMeter`.

SHA-256 do trecho: `761265edf5bfacb5c0833a9facfe8db441a7dd4c0a0c8166816c1887d75f6790`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
