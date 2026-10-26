# `sanitizeTemplateId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/agents/agents.ts` · [README do módulo](../../../../../modules/shared/agents/agents-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:485332-485334](../../../../../../reference/runtime/host-main.cjs#L485332-L485334) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485332-485334](../../../../../../reference/runtime/host-main.cjs#L485332-L485334) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:485332

Chamadas escritas diretamente neste corpo: `TEMPLATE_ID_PATTERN.test`.

SHA-256 do trecho: `dc6d9fe8368679c07693c8bcc2365550d8e983fd8c1c8cd2444ca0a24ddc7886`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
