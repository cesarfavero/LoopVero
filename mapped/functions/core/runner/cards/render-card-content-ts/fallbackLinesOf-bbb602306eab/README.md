# `fallbackLinesOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/cards/render-card-content.ts` · [README do módulo](../../../../../../modules/core/runner/cards/render-card-content-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:758025-758027](../../../../../../../reference/runtime/host-main.cjs#L758025-L758027) | `FunctionDeclaration` | não | `entry` |
| [evaluation:544123-544125](../../../../../../../reference/runtime/sand-eval-runner.cjs#L544123-L544125) | `FunctionDeclaration` | não | `entry` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758025-758027](../../../../../../../reference/runtime/host-main.cjs#L758025-L758027) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:544123-544125](../../../../../../../reference/runtime/sand-eval-runner.cjs#L544123-L544125) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:758025

Chamadas escritas diretamente neste corpo: `.filter`, `.map`, `entry.fallbackText.split`.

SHA-256 do trecho: `1cd950c287530fb508a62b54f90408f1708433a13147a63c92b725d49e51587a`.

### evaluation:544123

Chamadas escritas diretamente neste corpo: `.filter`, `.map`, `entry.fallbackText.split`.

SHA-256 do trecho: `1cd950c287530fb508a62b54f90408f1708433a13147a63c92b725d49e51587a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
