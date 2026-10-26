# `toSanitizationCandidate2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-request-composition.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-request-composition-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:510185-510204](../../../../../../reference/runtime/host-main.cjs#L510185-L510204) | `FunctionDeclaration` | não | `rawUrl` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:510185-510204](../../../../../../reference/runtime/host-main.cjs#L510185-L510204) | 2 | 0 | 0 | 4 | 0 | 1 |

### host:510185

Chamadas escritas diretamente neste corpo: `/^[a-z][a-z0-9+.-]*:\/\//i.test`, `new URL`, `rawUrl.match`.

SHA-256 do trecho: `62d183c289780b84bb2cb687ab6a6ea6ae8249c6f29773b4c1afe62abd2f3886`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
