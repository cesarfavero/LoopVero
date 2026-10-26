# `listedValueLines`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/secure-values/list-available-secure-values-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/list-available-secure-values-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:767204-767208](../../../../../../../../reference/runtime/host-main.cjs#L767204-L767208) | `FunctionDeclaration` | não | `values` |
| [evaluation:562723-562727](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562723-L562727) | `FunctionDeclaration` | não | `values` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767204-767208](../../../../../../../../reference/runtime/host-main.cjs#L767204-L767208) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:562723-562727](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562723-L562727) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:767204

Chamadas escritas diretamente neste corpo: `.map`, `values.toSorted`.

SHA-256 do trecho: `8aa327224b0f475dbf67a8ca9ea09bc5e1ed492b0a94ffe65ca0c286a44587f6`.

### evaluation:562723

Chamadas escritas diretamente neste corpo: `.map`, `values.toSorted`.

SHA-256 do trecho: `8aa327224b0f475dbf67a8ca9ea09bc5e1ed492b0a94ffe65ca0c286a44587f6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
