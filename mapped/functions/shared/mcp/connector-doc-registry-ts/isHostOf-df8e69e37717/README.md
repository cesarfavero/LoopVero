# `isHostOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773963-773965](../../../../../../reference/runtime/host-main.cjs#L773963-L773965) | `FunctionDeclaration` | não | `hostname4, domain2` |
| [evaluation:573178-573180](../../../../../../reference/runtime/sand-eval-runner.cjs#L573178-L573180) | `FunctionDeclaration` | não | `hostname3, domain2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773963-773965](../../../../../../reference/runtime/host-main.cjs#L773963-L773965) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:573178-573180](../../../../../../reference/runtime/sand-eval-runner.cjs#L573178-L573180) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:773963

Chamadas escritas diretamente neste corpo: `hostname4.endsWith`.

SHA-256 do trecho: `d278fabfb1ac2707e1abac7467ac467a3210321be1c07216c94ce3a3c614cb84`.

### evaluation:573178

Chamadas escritas diretamente neste corpo: `hostname3.endsWith`.

SHA-256 do trecho: `d9bbf2a6bc1713c805c9d1640ab389f9f8a94f8c7123ef9b299de1db14177dda`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
