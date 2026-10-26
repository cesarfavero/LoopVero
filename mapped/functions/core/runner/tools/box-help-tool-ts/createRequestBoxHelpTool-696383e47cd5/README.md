# `createRequestBoxHelpTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/box-help-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/box-help-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:725318-725399](../../../../../../../reference/runtime/host-main.cjs#L725318-L725399) | `FunctionDeclaration` | não | `deps` |
| [evaluation:560421-560502](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560421-L560502) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725318-725399](../../../../../../../reference/runtime/host-main.cjs#L725318-L725399) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:560421-560502](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560421-L560502) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:725318

Chamadas escritas diretamente neste corpo: `Promise.resolve`, `defineCommunicateTool`.

SHA-256 do trecho: `78c9c81d176c921754108d8a7e1b2c1b5f23ae032da8d39d24108d6b6cb3801c`.

### evaluation:560421

Chamadas escritas diretamente neste corpo: `Promise.resolve`, `defineCommunicateTool`.

SHA-256 do trecho: `78c9c81d176c921754108d8a7e1b2c1b5f23ae032da8d39d24108d6b6cb3801c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
