# `readdirOrEmpty`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/managed-setup/managed-setup-service.ts` · [README do módulo](../../../../../../modules/host/extensions/managed-setup/managed-setup-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:683661-683668](../../../../../../../reference/runtime/host-main.cjs#L683661-L683668) | `FunctionDeclaration` | sim | `dir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683661-683668](../../../../../../../reference/runtime/host-main.cjs#L683661-L683668) | 1 | 0 | 1 | 2 | 1 | 1 |

### host:683661

Chamadas escritas diretamente neste corpo: `findSystemErrno`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `f424c20ce8a6e6d0a014fb66662796c13f7c5424e18cd24dfa29d705a7e74840`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
