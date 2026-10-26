# `surfaceListenerConnectCards`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/listener-connect-cards.ts` · [README do módulo](../../../../../../modules/core/runner/tools/listener-connect-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:770916-770947](../../../../../../../reference/runtime/host-main.cjs#L770916-L770947) | `FunctionDeclaration` | sim | `{   trigger: trigger2,   isListenerPlatformConnected,   emit }` |
| [evaluation:570022-570053](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570022-L570053) | `FunctionDeclaration` | sim | `{   trigger,   isListenerPlatformConnected,   emit }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770916-770947](../../../../../../../reference/runtime/host-main.cjs#L770916-L770947) | 5 | 2 | 1 | 4 | 0 | 1 |
| [evaluation:570022-570053](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570022-L570053) | 5 | 2 | 1 | 4 | 0 | 1 |

### host:770916

Chamadas escritas diretamente neste corpo: `.join`, `disconnected.map`, `disconnected.push`, `emit`, `errorLogTag`, `isListenerPlatformConnected`, `listenerPlatformsInTrigger`, `process.stderr.write`.

SHA-256 do trecho: `4276e86add13b803201ca7ee96b17e88bd72b0bcd23d5edb0014241f8eeec768`.

### evaluation:570022

Chamadas escritas diretamente neste corpo: `.join`, `disconnected.map`, `disconnected.push`, `emit`, `errorLogTag`, `isListenerPlatformConnected`, `listenerPlatformsInTrigger`, `process.stderr.write`.

SHA-256 do trecho: `06ee3ad99c9bb97996f8f5bef4afdc8574a24938ea162811269472834aa9d4ad`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
