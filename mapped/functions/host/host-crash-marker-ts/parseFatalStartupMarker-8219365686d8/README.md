# `parseFatalStartupMarker`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/host-crash-marker.ts` · [README do módulo](../../../../modules/host/host-crash-marker-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:471441-471456](../../../../../reference/runtime/host-main.cjs#L471441-L471456) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:471441-471456](../../../../../reference/runtime/host-main.cjs#L471441-L471456) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:471441

Chamadas escritas diretamente neste corpo: `isBoundedTag`, `isFatalStartupStage`, `readCommonTimes`.

SHA-256 do trecho: `4970fd4be607ae8fdea32c1ec25738c1dd688918a38a6fbc0c030b4295f828ee`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
