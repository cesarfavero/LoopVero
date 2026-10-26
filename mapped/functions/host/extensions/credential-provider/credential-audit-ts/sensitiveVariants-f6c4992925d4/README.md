# `sensitiveVariants`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/credential-audit.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/credential-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:546885-546893](../../../../../../../reference/runtime/host-main.cjs#L546885-L546893) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546885-546893](../../../../../../../reference/runtime/host-main.cjs#L546885-L546893) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:546885

Chamadas escritas diretamente neste corpo: `encodeURI`, `encodeURIComponent`, `variants.push`.

SHA-256 do trecho: `98056743904c929d9cb1a5a9af97742ecb7cfc1d258e8979c00399677692f5c3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
