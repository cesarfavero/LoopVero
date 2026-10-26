# `placesCardWithPhotos`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/places/places-card-kind.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/places/places-card-kind-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768789-768799](../../../../../../../../reference/runtime/host-main.cjs#L768789-L768799) | `FunctionDeclaration` | sim | `ctx, port, places, clock = realClock` |
| [evaluation:564364-564374](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564364-L564374) | `FunctionDeclaration` | sim | `ctx, port, places, clock = realClock` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768789-768799](../../../../../../../../reference/runtime/host-main.cjs#L768789-L768799) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:564364-564374](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564364-L564374) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:768789

Chamadas escritas diretamente neste corpo: `places.map`, `placesCardOf`, `resolvedPhotos`.

SHA-256 do trecho: `67bd326160f6aeed732a7f7d1913641c6a92c064c65662bd4ec42312b8657a62`.

### evaluation:564364

Chamadas escritas diretamente neste corpo: `places.map`, `placesCardOf`, `resolvedPhotos`.

SHA-256 do trecho: `67bd326160f6aeed732a7f7d1913641c6a92c064c65662bd4ec42312b8657a62`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
