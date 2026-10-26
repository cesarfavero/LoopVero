# `nativePluginLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/box-reference-docs.ts` · [README do módulo](../../../../../modules/core/runner/box-reference-docs-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:558413-558421](../../../../../../reference/runtime/host-main.cjs#L558413-L558421) | `FunctionDeclaration` | não | `plugin, facts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:558413-558421](../../../../../../reference/runtime/host-main.cjs#L558413-L558421) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:558413

Chamadas escritas diretamente neste corpo: `.join`, `annotationsFor`, `joinClauses`, `plugin.controls.map`, `presenceSentence`.

SHA-256 do trecho: `22158831fa214f4c71c1e5b9f09d065252ce9bd2ecc41c1aa8b34b6679d3d152`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
