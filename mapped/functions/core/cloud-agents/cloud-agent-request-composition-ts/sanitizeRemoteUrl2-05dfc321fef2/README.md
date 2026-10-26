# `sanitizeRemoteUrl2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-request-composition.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-request-composition-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:510205-510216](../../../../../../reference/runtime/host-main.cjs#L510205-L510216) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:510205-510216](../../../../../../reference/runtime/host-main.cjs#L510205-L510216) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:510205

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `new URL`, `raw.trim`, `toSanitizationCandidate2`, `trimRemotePath2`.

SHA-256 do trecho: `57dd142d6a3fa202c895ae67fc48fcdc7228d082ccdff96a36bc09a3687d65b4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
