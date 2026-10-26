# `recordSteps`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/playwright-box-timing.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/playwright-box-timing-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:743263-743286](../../../../../../../../reference/runtime/host-main.cjs#L743263-L743286) | `FunctionDeclaration` | não | `runtimeCtx, steps, runtimeStart, runtimeEnd` |
| [evaluation:516114-516137](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516114-L516137) | `FunctionDeclaration` | não | `runtimeCtx, steps, runtimeStart, runtimeEnd` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743263-743286](../../../../../../../../reference/runtime/host-main.cjs#L743263-L743286) | 5 | 2 | 0 | 0 | 0 | 0 |
| [evaluation:516114-516137](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516114-L516137) | 5 | 2 | 0 | 0 | 0 | 0 |

### host:743263

Chamadas escritas diretamente neste corpo: `open13.at`, `open13.pop`, `open13.push`, `recordComputerUseSpanAt`, `registrableHolderSite`.

SHA-256 do trecho: `43f44b89313c16ee9b7d36a4faaa89a85b3582fa791ce5229a7c00233abe8e77`.

### evaluation:516114

Chamadas escritas diretamente neste corpo: `open4.at`, `open4.pop`, `open4.push`, `recordComputerUseSpanAt`, `registrableHolderSite`.

SHA-256 do trecho: `464e0751cf86cd78ea3e2a0acce73036f584ef2fdb8f74c853af152169549035`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
