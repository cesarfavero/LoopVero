# `fourCharTag`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/image-dimensions.ts` · [README do módulo](../../../../../modules/shared/media/image-dimensions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:497284-497291](../../../../../../reference/runtime/host-main.cjs#L497284-L497291) | `FunctionDeclaration` | não | `view, offset2` |
| [evaluation:514982-514989](../../../../../../reference/runtime/sand-eval-runner.cjs#L514982-L514989) | `FunctionDeclaration` | não | `view, offset2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497284-497291](../../../../../../reference/runtime/host-main.cjs#L497284-L497291) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:514982-514989](../../../../../../reference/runtime/sand-eval-runner.cjs#L514982-L514989) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:497284

Chamadas escritas diretamente neste corpo: `String.fromCharCode`, `view.getUint8`.

SHA-256 do trecho: `fc343f6b1fc85a701d86cfb73db6f8c23f8048a47c9ce9fdafe4dc74cc052b93`.

### evaluation:514982

Chamadas escritas diretamente neste corpo: `String.fromCharCode`, `view.getUint8`.

SHA-256 do trecho: `fc343f6b1fc85a701d86cfb73db6f8c23f8048a47c9ce9fdafe4dc74cc052b93`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
