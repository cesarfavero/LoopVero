# `SandInferenceCredentialRenewer.reportResult`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/auth/credential-renewer.ts` · [README do módulo](../../../../../../modules/host/extensions/auth/credential-renewer-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:454351-454362](../../../../../../../reference/runtime/host-main.cjs#L454351-L454362) | `method` | não | `outcome, durationMs, errorClass, errorSummary` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454351-454362](../../../../../../../reference/runtime/host-main.cjs#L454351-L454362) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:454351

Chamadas escritas diretamente neste corpo: `this.options.onResult`.

SHA-256 do trecho: `611249a9ac27fd464d9701c7b88e1494e213769d0c02517166ea5494af1f1860`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
