# `parseSourceMap`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/source-map/source-map-service.ts` · [README do módulo](../../../../../../modules/host/extensions/source-map/source-map-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:454380-454382](../../../../../../../reference/runtime/host-main.cjs#L454380-L454382) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454380-454382](../../../../../../../reference/runtime/host-main.cjs#L454380-L454382) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:454380

Chamadas escritas diretamente neste corpo: `JSON.parse`, `sourceMapSchema.parse`.

SHA-256 do trecho: `6a0938f9d11aca8ca4e36142792fcaa59182c290e4915ed26073592c21e613a3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
