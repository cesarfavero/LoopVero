# `canonicalRenderCardId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/cards/render-card-registry.ts` · [README do módulo](../../../../../../modules/core/runner/cards/render-card-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:741044-741046](../../../../../../../reference/runtime/host-main.cjs#L741044-L741046) | `FunctionDeclaration` | não | `id` |
| [evaluation:481939-481941](../../../../../../../reference/runtime/sand-eval-runner.cjs#L481939-L481941) | `FunctionDeclaration` | não | `id` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741044-741046](../../../../../../../reference/runtime/host-main.cjs#L741044-L741046) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:481939-481941](../../../../../../../reference/runtime/sand-eval-runner.cjs#L481939-L481941) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:741044

Chamadas escritas diretamente neste corpo: `id.toUpperCase`.

SHA-256 do trecho: `f2f2ab91f10f9d64061ebb97117e183cab6d69fbe9adfc1d3db94331427564d0`.

### evaluation:481939

Chamadas escritas diretamente neste corpo: `id.toUpperCase`.

SHA-256 do trecho: `f2f2ab91f10f9d64061ebb97117e183cab6d69fbe9adfc1d3db94331427564d0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
