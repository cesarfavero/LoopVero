# `slackProfileSelfNames`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-route-verification.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:735163-735170](../../../../../../../reference/runtime/host-main.cjs#L735163-L735170) | `FunctionDeclaration` | não | `authedProfileText` |
| [evaluation:540737-540744](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540737-L540744) | `FunctionDeclaration` | não | `authedProfileText` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735163-735170](../../../../../../../reference/runtime/host-main.cjs#L735163-L735170) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540737-540744](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540737-L540744) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:735163

Chamadas escritas diretamente neste corpo: `.filter`, `.map`, `slackProfileField`.

SHA-256 do trecho: `5b78da85a5ad572748fcc950a8a32ed9da3a997bdcede137dbb68342c5cd0849`.

### evaluation:540737

Chamadas escritas diretamente neste corpo: `.filter`, `.map`, `slackProfileField`.

SHA-256 do trecho: `5b78da85a5ad572748fcc950a8a32ed9da3a997bdcede137dbb68342c5cd0849`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
