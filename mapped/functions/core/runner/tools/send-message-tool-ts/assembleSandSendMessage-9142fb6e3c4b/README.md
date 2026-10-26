# `assembleSandSendMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760780-760783](../../../../../../../reference/runtime/host-main.cjs#L760780-L760783) | `FunctionDeclaration` | sim | `ctx, rawArgs, deps, threadTask, cards` |
| [evaluation:551595-551598](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551595-L551598) | `FunctionDeclaration` | sim | `ctx, rawArgs, deps, threadTask, cards` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760780-760783](../../../../../../../reference/runtime/host-main.cjs#L760780-L760783) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:551595-551598](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551595-L551598) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:760780

Chamadas escritas diretamente neste corpo: `assembleMessageBody`.

SHA-256 do trecho: `c8db85a264e4fc3a3a29c88528d82aa59aedc51017aa322d4e405e85306bfa75`.

### evaluation:551595

Chamadas escritas diretamente neste corpo: `assembleMessageBody`.

SHA-256 do trecho: `c8db85a264e4fc3a3a29c88528d82aa59aedc51017aa322d4e405e85306bfa75`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
