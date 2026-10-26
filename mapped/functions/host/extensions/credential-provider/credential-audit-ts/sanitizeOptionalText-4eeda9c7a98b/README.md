# `sanitizeOptionalText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/credential-audit.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/credential-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:546910-546914](../../../../../../../reference/runtime/host-main.cjs#L546910-L546914) | `FunctionDeclaration` | não | `value, sensitiveValues` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546910-546914](../../../../../../../reference/runtime/host-main.cjs#L546910-L546914) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:546910

Chamadas escritas diretamente neste corpo: `sanitizeText`.

SHA-256 do trecho: `bde50159c5d3ba1c7c95185ec3561b4c56a8042463a3d99dab426d2ca0223c44`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
