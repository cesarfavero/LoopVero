# `isPublishNotConfiguredError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/cloud-agents/cloud-agent-publish-proposals.ts` · [README do módulo](../../../../../../modules/host/extensions/cloud-agents/cloud-agent-publish-proposals-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:537778-537780](../../../../../../../reference/runtime/host-main.cjs#L537778-L537780) | `FunctionDeclaration` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:537778-537780](../../../../../../../reference/runtime/host-main.cjs#L537778-L537780) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:537778

Chamadas escritas diretamente neste corpo: `/not (enabled|configured|available)/i.test`.

SHA-256 do trecho: `9f13e9f3a64893d684ae6655b198053c721fa0c13f25a4d906cd98278e4f9e75`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
