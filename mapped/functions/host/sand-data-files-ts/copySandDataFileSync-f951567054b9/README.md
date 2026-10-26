# `copySandDataFileSync`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-data-files.ts` · [README do módulo](../../../../modules/host/sand-data-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453918-453931](../../../../../reference/runtime/host-main.cjs#L453918-L453931) | `FunctionDeclaration` | não | `source, target` |
| [state-worker:556-569](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L556-L569) | `FunctionDeclaration` | não | `source, target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453918-453931](../../../../../reference/runtime/host-main.cjs#L453918-L453931) | 1 | 0 | 0 | 0 | 0 | 0 |
| [state-worker:556-569](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L556-L569) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:453918

Chamadas escritas diretamente neste corpo: `openNoFollowSync2`, `sandDataNoFollowRoot`, `withParentNoFollowSync`.

SHA-256 do trecho: `1c1483065bca319bd46fa2633aac0c47034472fd7632380c7bd5bca37af94d0a`.

### state-worker:556

Chamadas escritas diretamente neste corpo: `openNoFollowSync`, `sandDataNoFollowRoot`, `withParentNoFollowSync`.

SHA-256 do trecho: `03a174b50b48ad6c1c83c309fe745063d146a95abac5774f1adc28bcc24d41ce`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
