# `normalizeHttpProxyName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/http-proxy-name-override.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/http-proxy-name-override-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:731728-731734](../../../../../../../reference/runtime/host-main.cjs#L731728-L731734) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731728-731734](../../../../../../../reference/runtime/host-main.cjs#L731728-L731734) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:731728

Chamadas escritas diretamente neste corpo: `VISIBLE_ASCII.test`, `raw.trim`.

SHA-256 do trecho: `5401d06e2036cd1ed021cdadac27f4ec733ff7fd8140ec7cfc13aa69c4db6dca`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
