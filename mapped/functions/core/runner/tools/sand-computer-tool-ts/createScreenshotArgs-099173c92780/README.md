# `createScreenshotArgs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-computer-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777346-777351](../../../../../../../reference/runtime/host-main.cjs#L777346-L777351) | `FunctionDeclaration` | não | `toolCallId` |
| [evaluation:576991-576996](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576991-L576996) | `FunctionDeclaration` | não | `toolCallId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777346-777351](../../../../../../../reference/runtime/host-main.cjs#L777346-L777351) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576991-576996](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576991-L576996) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:777346

Chamadas escritas diretamente neste corpo: `new ComputerUseArgs`, `toAction`.

SHA-256 do trecho: `ec180f9fdff1abbff23609f2324e7a6555391a2a23a0f503c3ac94cb7b5a178d`.

### evaluation:576991

Chamadas escritas diretamente neste corpo: `new ComputerUseArgs`, `toAction`.

SHA-256 do trecho: `ec180f9fdff1abbff23609f2324e7a6555391a2a23a0f503c3ac94cb7b5a178d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
