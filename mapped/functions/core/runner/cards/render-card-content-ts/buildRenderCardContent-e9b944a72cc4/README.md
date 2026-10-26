# `buildRenderCardContent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/cards/render-card-content.ts` · [README do módulo](../../../../../../modules/core/runner/cards/render-card-content-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:758017-758024](../../../../../../../reference/runtime/host-main.cjs#L758017-L758024) | `FunctionDeclaration` | não | `lead, fallbackTexts` |
| [evaluation:544115-544122](../../../../../../../reference/runtime/sand-eval-runner.cjs#L544115-L544122) | `FunctionDeclaration` | não | `lead, fallbackTexts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758017-758024](../../../../../../../reference/runtime/host-main.cjs#L758017-L758024) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:544115-544122](../../../../../../../reference/runtime/sand-eval-runner.cjs#L544115-L544122) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:758017

Chamadas escritas diretamente neste corpo: `fallbackTexts.join`, `lead.trim`.

SHA-256 do trecho: `255cfaf5e3d53534cbf67f73ace1f85cfdddde35f727a0f9728b04a9e1eba6b7`.

### evaluation:544115

Chamadas escritas diretamente neste corpo: `fallbackTexts.join`, `lead.trim`.

SHA-256 do trecho: `255cfaf5e3d53534cbf67f73ace1f85cfdddde35f727a0f9728b04a9e1eba6b7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
