# `recordSleeps`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-telemetry.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:700597-700608](../../../../../../reference/runtime/host-main.cjs#L700597-L700608) | `FunctionDeclaration` | não | `ctx, args` |
| [evaluation:514389-514400](../../../../../../reference/runtime/sand-eval-runner.cjs#L514389-L514400) | `FunctionDeclaration` | não | `ctx, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700597-700608](../../../../../../reference/runtime/host-main.cjs#L700597-L700608) | 2 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:514389-514400](../../../../../../reference/runtime/sand-eval-runner.cjs#L514389-L514400) | 2 | 0 | 0 | 0 | 0 | 0 |

### host:700597

Chamadas escritas diretamente neste corpo: `runCodeSleepCalls.increment`, `runCodeSleepTime.histogram`.

SHA-256 do trecho: `ad04843d7f50b8166c3f5d61f7f17620b155871c7004eec3e27178f97560d331`.

### evaluation:514389

Chamadas escritas diretamente neste corpo: `runCodeSleepCalls.increment`, `runCodeSleepTime.histogram`.

SHA-256 do trecho: `ad04843d7f50b8166c3f5d61f7f17620b155871c7004eec3e27178f97560d331`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
