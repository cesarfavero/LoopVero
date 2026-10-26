# `recordPlaywrightRunCodeImages`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-telemetry.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:700476-700482](../../../../../../reference/runtime/host-main.cjs#L700476-L700482) | `FunctionDeclaration` | não | `ctx, args` |
| [evaluation:514265-514271](../../../../../../reference/runtime/sand-eval-runner.cjs#L514265-L514271) | `FunctionDeclaration` | não | `ctx, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700476-700482](../../../../../../reference/runtime/host-main.cjs#L700476-L700482) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:514265-514271](../../../../../../reference/runtime/sand-eval-runner.cjs#L514265-L514271) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:700476

Chamadas escritas diretamente neste corpo: `countBucket`, `runCodeResultImages.increment`.

SHA-256 do trecho: `ffc3a90bcacb30ad61612abfa9c413c96e6d72c54894ebcfb8608cf63faa4187`.

### evaluation:514265

Chamadas escritas diretamente neste corpo: `countBucket`, `runCodeResultImages.increment`.

SHA-256 do trecho: `ffc3a90bcacb30ad61612abfa9c413c96e6d72c54894ebcfb8608cf63faa4187`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
