# `runCodeErrorText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750804-750807](../../../../../../../reference/runtime/host-main.cjs#L750804-L750807) | `FunctionDeclaration` | não | `success2` |
| [evaluation:523655-523658](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523655-L523658) | `FunctionDeclaration` | não | `success2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750804-750807](../../../../../../../reference/runtime/host-main.cjs#L750804-L750807) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:523655-523658](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523655-L523658) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:750804

Chamadas escritas diretamente neste corpo: `success2.content.find`.

SHA-256 do trecho: `d85483ac00c4017132da7a10e07f5f9cf18fc189f1a805704becd9ab41ab0af2`.

### evaluation:523655

Chamadas escritas diretamente neste corpo: `success2.content.find`.

SHA-256 do trecho: `d85483ac00c4017132da7a10e07f5f9cf18fc189f1a805704becd9ab41ab0af2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
