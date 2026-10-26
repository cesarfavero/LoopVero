# `toImageDimensions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/image-dimensions.ts` · [README do módulo](../../../../../modules/shared/media/image-dimensions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:497273-497277](../../../../../../reference/runtime/host-main.cjs#L497273-L497277) | `FunctionDeclaration` | não | `{ width, height }` |
| [evaluation:514971-514975](../../../../../../reference/runtime/sand-eval-runner.cjs#L514971-L514975) | `FunctionDeclaration` | não | `{ width, height }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497273-497277](../../../../../../reference/runtime/host-main.cjs#L497273-L497277) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:514971-514975](../../../../../../reference/runtime/sand-eval-runner.cjs#L514971-L514975) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:497273

Chamadas escritas diretamente neste corpo: `Number.isFinite`.

SHA-256 do trecho: `5e716b908220900a843f12819eb12f12d095e32e4e6ca7bea8047d2599cf4fc6`.

### evaluation:514971

Chamadas escritas diretamente neste corpo: `Number.isFinite`.

SHA-256 do trecho: `5e716b908220900a843f12819eb12f12d095e32e4e6ca7bea8047d2599cf4fc6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
